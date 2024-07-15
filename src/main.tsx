import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import Doc from './components/Doc';
import Sheet from './components/Sheet';
import DocViewer, { loader as docLoader } from './routes/doc-viewer';
import SheetViewer, { loader as sheetLoader } from './routes/sheet-viewer';
import FieldDetails, { action as editFieldAction, loader as fieldLoader } from './routes/field-details';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <CssBaseline />
        <Root />
      </>
    ),
    loader: rootLoader,
    action: rootAction,

    // TODO: gotta have some nested routes, 
    // thinking :docId/:sheetId/:fieldId
    // Components like: Doc, Sheet, Field
    // first do all editing via a form and action on Field
    // can create new field from Sheet, opens Field
    // Follow pattern in React Router tutorial about contacts
    // Should save doc in localforage while working with it,
    // but would get it from backend API call, could mock that
    // for now with a function that returns a simple sample doc.
    children: [
      {
        path: ':docId',
        element: (
          <DocViewer />
        ),
        loader: docLoader,
        children: [
          {
            path: ':sheetId',
            element: (
              <SheetViewer />
            ),
            loader: sheetLoader,
            children: [
              {
                path: ':fieldId',
                element: (
                  <FieldDetails />
                ),
                action: editFieldAction,
                loader: fieldLoader,
              }
            ]
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
