import React, { Component } from "react";
import DisplayNote from "./DisplayNote";
// import App from "./App";


class Main extends Component{

    state = {
        Heading: '',
        Description: '',
        Notes: [],
    }

    AddNote = (e) => {

        e.preventDefault();

        if(this.state.Heading === "" || this.state.Description === ""){
            alert("All fields are mandatory");
            return;
        }

        // this.props.AddNoteInNotes(this.state.Description);

        const newNotesList = [...this.state.Notes, this.state];

        this.setState({Notes: newNotesList});

        console.log(newNotesList);

        this.setState({Heading:"", Description:""});

        // console.log(this.state);

    }

    DeleteNote = (id) => {

        const newNotesListAfterDelete = this.state.Notes.filter((value, idx) => {
            return idx !== id;
        });

        this.setState({Notes: newNotesListAfterDelete});

        console.log('Deleted');
    }

    changeHeading = (e) => {
        this.setState({
            Heading: e.target.value
        })
    }

    changeDescription = (e) => {
        this.setState({
            Description: e.target.value
        })
    }

    render() {
        return (
            <center>
          <div className="container-fluid my-5">
            <div className="row">
              <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                <h2 className="text-center"> My Notes </h2>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-9">
                      <input type="text" className="form-control" placeholder="Heading" value={this.state.Heading} onChange={this.changeHeading} />
                      <br/> <br/>
                      <input type="text" className="form-control" placeholder="Description" value={this.state.Description} onChange={this.changeDescription} />
                    </div>
                    <br/><br/>
                    <div className="col-2">
                      <button className="btn btn-warning px-5 font-weight-bold"  onClick={this.AddNote}>Add</button>
                    </div>
                  </div>
                  <div className="conatiner">
                    <div className="list-unstyled row m-5">
                    {
                            this.state.Notes.map((value, idx) => {
                            return <DisplayNote value={value} key={idx} id={idx} sendDataForDelete={this.DeleteNote}  />
                        })
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </center>
        );
      }

}

export default Main;