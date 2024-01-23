// import React from 'react'

import { FileInput, Label } from 'flowbite-react';

function FilePickup() {
  return (
    <div>
      <div>
      <div>
        <Label htmlFor="multiple-file-upload" value="Upload multiple files" />
      </div>
      <FileInput id="multiple-file-upload" multiple />
    </div>
    </div>
  )
}

export default FilePickup
// rfce