/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, FileWithPath, CSV_MIME_TYPE } from '@mantine/dropzone';
import React from 'react';


function UserDropZone() {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });

    return (
        <div>
            <Dropzone accept={CSV_MIME_TYPE} onDrop={setFiles}>
                <Text align="center">Drop csv here</Text>
            </Dropzone>

            <SimpleGrid
                cols={4}
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                mt={previews.length > 0 ? 'xl' : 0}
            >
                {previews}
            </SimpleGrid>
        </div>
    );
}


export default UserDropZone;
