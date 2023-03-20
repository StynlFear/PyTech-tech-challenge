import React from "react";
import { Editor } from '@tinymce/tinymce-react';
export function SectionEditor( props ) {

    return (

        <div className="move-input-cf">

<Editor
        apiKey='8kthf9jvq1qz19jgizp0f91gaed5vr923mna2s5yxnnkknc0'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p> </p>"
        textareaName='Content'
        init={{
          height: 200,
          width:700,
          statusbar: false,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help'+'image',
            images_file_types: 'jpg,svg,webp',
          content_style: 'body { font-family: "Roboto"; font-style: normal; font-size:14px }',
        }}
      />

        </div>

    )

}
