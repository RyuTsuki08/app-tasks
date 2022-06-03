import React, { useEffect, useState } from 'react';


function Card(props)
{
    const [state, addTask] = useState({title: '', description: '', tasks : [], _id: '', emoji: ''});

    return(
        <div className='container'>
                <div className='col s5'>
                    <div className='card'>
                        <div className='card-content'>
                            <form onSubmit={(e) =>
                            {
                                if(state.title == '' && state.description == '') 
                                {
                                    M.toast({html: 'you must send a task, sorry'})
                                    window.alert('You must send a task, sorry')
                                    // fetch(`/api/tasks/${state._id}`, {
                                    //     method: 'PUT',
                                    //     body: JSON.stringify(state),
                                    //     headers: {
                                    //         'Accept': 'application/json',
                                    //         'Content-type': 'application/json'
                                    //     }
                                    // })
                                    // .then(res => res.json())
                                    // .then(data => addTask({
                                    //     title: state.title,
                                    //     description: state.description
                                    // }));
                                }  else{
                                    fetch('/api/tasks', {
                                        method: 'POST',
                                        body: JSON.stringify(state),
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-type': 'application/json'
                                        }
                                    })
                                    .then(res => res.json()  
                                    .then(data => {
                                        M.toast({html: 'Task Saved!📧'});
                                        addTask({
                                            title: '',
                                            description: ''
                                        });
                                    })
                                    .catch(err => console.log(err))
                                    )
                                    .catch(err => console.error(err));
                                    e.preventDefault();
                                }
                                  }
                            }>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input name='title' onChange={(i) => 
                                        {
                                            addTask({
                                                title : state.title = i.target.value,
                                                description : state.description
                                            });
                                            
                                        }
                                        } type="text" placeholder='Task Title' value={state.title} />   
                                    </div>    
                                </div>
                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <textarea name='description' maxLength="126" onChange={(a) => 
                                            {
                                                addTask({
                                                    title : state.title,
                                                    description: state.description = a.target.value
                                                });
                                            } } className='materialize-textarea' placeholder='Task Description' value={state.description} />   
                                    </div>    
                                </div>
                                <button type='submit' className='btn btn-light darken-4'>
                                    Send ✅ 
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}




export default Card;