import Layout from 'components/layout';
import { useState } from 'react';


const DEFAULT_DATA = {

    title: "",
    description:"",
    link:"",
    priority:"1",
    timeToFinish:60
}


const ResourceForm = ({onFormSubmit,initialData}) =>{


    const [form, setForm] = useState(initialData ||DEFAULT_DATA);

    const resetForm = () =>{
        setForm(DEFAULT_DATA);
    }

    const submitForm = () =>{

        onFormSubmit(form);
    }


    return(


        <div className='resource-form'>

            <h1 className='title'>Create New Resource</h1>

            <form>

                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input 
                            value={form.title} 
                            name="title"
                            onChange={(e)=>{setForm({...form,title:e.target.value})}}
                            className="input" 
                            type="text"
                            placeholder="Title"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea 
                            value={form.description}  
                            name="description"
                            onChange={(e)=>{setForm({...form,description:e.target.value})}}
                            className="textarea" 
                            placeholder="Description"
                            ></textarea>
                        </div>
                        <p className="help">Description Required</p>
                    </div>

                    <div className="field">
                        <label className="label">Link</label>
                        <div className="control">
                            <input 
                            value={form.link} 
                            name="link"
                            onChange={(e)=>{setForm({...form,link:e.target.value})}}
                            className="input" 
                            type="text" 
                            placeholder="Link"/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Priority</label>
                        <div className="control">
                            <div className="select">
                            <select value={form.priority} name='priority'  onChange={(e)=>{setForm({...form,priority:e.target.value})}} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                
                            </select>
                            </div>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Time to Finish</label>
                        <div className="control">
                            <input 
                            value={form.timeToFinish} 
                            name="timeToFinish"
                            onChange={(e)=>{setForm({...form,timeToFinish:e.target.value})}}
                            className="input"
                            type="number" 
                            placeholder="Time to Finish"/>
                        </div>
                        <p className="help">Time in Minutes </p>
                    </div>




                    <div className="field is-grouped">

                        <div className="control">
                            <button 
                            type='button'
                            onClick={submitForm}
                            className="button is-link">
                                Submit
                            </button>
                        </div>
                        <div className="control">
                            <button type="button" onClick={resetForm} className="button is-link is-light">Cancel</button>
                        </div>
                    </div>

          </form>
     </div>

    )
}

export default ResourceForm;