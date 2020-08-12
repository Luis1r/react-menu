/*myUploads.js*/
import React from "react";
import Table from "../components/Table/Table";
import Upload from '../components/Upload'
import See from '../components/See'
/* We simply can use an array and loop and print each intem in the list */
const UploadPage = () => {
    return (
        <div>
            <Upload />
            <ul>
                {["Alex", "John", "Jaz", "fedrik", "missali"].map((user, idx) => {
                    return <li key={idx}>{user}</li>;
                })}
            </ul>
            <Table />
            <See />
        </div>
    );
};

export default UploadPage;