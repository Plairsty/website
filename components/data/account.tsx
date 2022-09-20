import React, { useState } from 'react';
import Papa from 'papaparse';
// interface TableProps {
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
// }
const account = () => {
  // const [data, setData] = useState<TableProps[]>();
  const [error, setError] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isFileProcessing, setIsFileProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const filesLenght = e.target.files?.length;
    const inputFile = e.target.files?.[0];
    if (!filesLenght) {
      setError('No file selected');
      return;
    }
    if (filesLenght > 1) {
      setError('Only one file can be uploaded at a time');
      return;
    }
    if (inputFile?.type.split('/')[1] !== 'csv') {
      setError('Only csv files are allowed');
      return;
    }
    setFile(inputFile);
  };

  const handleParse = () => {
    console.log('handleParse');
    if (!file) return setError('Enter a valid file');
    Papa.parse(file, {
      worker: true,
      step: (results) => {
        setIsFileProcessing(true);
        // const data = results.data;
        // setData(data[0]);
        // console.log(data[0]);
        // const username = data[0];
        // const firstName = data[1];
        // const lastName = data[2];
        // const email = data[3];
        // const phone = data[4];
        // setData([
        //   {
        //     username: username,
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     phone: phone,
        //   },
        // ]);
        // setData((prev) => ({ ...prev,  }));
      },
      complete: () => {
        setIsFileProcessing(false);
      },
    });
  };
  return (
    <div>
      <label htmlFor="csvInput" style={{ display: 'block' }}>
        Enter CSV File
      </label>
      <input
        onChange={handleFileChange}
        id="csvInput"
        name="file"
        type="File"
      />
      <div>
        <button onClick={handleParse}>Parse</button>
      </div>
      <div style={{ marginTop: '3rem' }}>
        {isFileProcessing ? (
          <div>Processing...</div>
        ) : (
          <div>
            Your data:
            {/* <div>{data}</div> */}
          </div>
        )}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default account;
