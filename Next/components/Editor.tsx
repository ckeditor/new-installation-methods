"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Bold, ClassicEditor, Essentials, Paragraph } from "ckeditor5";

function Editor() {
  ClassicEditor.builtinPlugins = [Essentials, Paragraph, Bold];

  return (
    <>
      <div className="w-60 h-40">
        <CKEditor editor={ClassicEditor} config={{ toolbar: ["bold"] }} />
      </div>
    </>
  );
}

export default Editor;
