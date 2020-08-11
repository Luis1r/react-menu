/*myUploads.js*/
import React from "react";
/* We simply can use an array and loop and print each intem in the list */
const UploadPage = () => {
    return (
        <div>
            <ul>
                {["Alex", "John", "Jaz", "fedrik", "missali"].map((user, idx) => {
                    return <li key={idx}>{user}</li>;
                })}
            </ul>
        </div>
    );
};

export default UploadPage;