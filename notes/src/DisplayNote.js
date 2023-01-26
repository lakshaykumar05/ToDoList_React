import React from 'react';

function DisplayNote(props) {

    // const DeleteHandler = () => {
    //     return props.DeleteNote(props.key);
    // }

    return (
        <>
        <col>
        <row>
            <li className="shadow p-2 my-2 col-sm-9">{props.value.Heading}</li>
        </row>
        <row>
            <li className="shadow p-2 my-2 col-sm-9">{props.value.Description}</li>
        </row>
            <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => {props.sendDataForDelete(props.id)}}>
                X
            </button>
        </col>
        </>
    );
  
}

export default DisplayNote;