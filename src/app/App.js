import React, {  useState, useEffect } from 'react';
import Aos from 'aos';
import m from 'moment';
import Navigation from './components/Navigation.js';
import Card from './components/card.js';
let time = m().format('LT');
let retime = m().startOf(time).fromNow();


function App(props)
{
    const [state, setState] = useState({title: '', description: '', tasks : [], _id: ''});

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        Aos.refresh();
    }, []);

    function fetchTasks()
    {
       fetch('/api/tasks')
       .then(res => res.json())
       .then(data => {
           setState({tasks: data})
    }); 
    }
        return(
            <div id="exports" onLoad={fetchTasks()}>
                <Navigation />
            <div className='row'>
                <Card />
                    <h2 id='tasks_head' className=''>
                        You have <span className=''>{state.tasks.length}</span> tasks 
                    </h2>
                <div className='' id="wrapper">
                            {
                                state.tasks.map(task => 
                                    {
                                        return (
                                            <div data-aos="fade-up" key={task._id}>
                                              <div className="Card-Tasks" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                                                <div className="card-content white-text" >  
                                                <span ></span>
                                                  <h2 className="card-title">{task.title}</h2>
                                                  <p>{task.description}</p>
                                                </div>
                                                <div className="card-action">
                                                    <button className='btN' onClick={(_id) => 
                                                                                            { 
                                                                                                if(confirm('Are you sure of delete it this task?')){
                                                                                                    fetch(`/api/tasks/${task._id}`, {
                                                                                                        method: 'DELETE',
                                                                                                        headers: {
                                                                                                            'Accept': 'application/json',
                                                                                                            'content-type': 'application/json'
                                                                                                        }
                                                                                                    })
                                                                                                    .then(res => res.json())
                                                                                                    .then(data => {
                                                                                                        console.log(data);
                                                                                                        M.toast({html: 'Task Deleted! 😭'}) 
                                                                                                        fetchTasks(); 
                                                                                                    })
                                                                                                } else{
                                                                                                    M.toast({html: 'Operation canceled!'})
                                                                                                }
                                                                                            }}>
                                                                                                <i className='material-icons'>delete</i>
                                                    </button>
                                                    <button className='btN' onClick={(id) => 
                                                                                                {
                                                                                                    fetch(`/api/tasks/${task._id}`)
                                                                                                    .then(res => res.json())
                                                                                                    .then(data => { 
                                                                                                        M.toast({html: 'button failed 🥺'})
                                                                                                        window.alert('button failed 🥺')
                                                                                                        console.log(data)
                                                                                                    });
                                                                                                }}>
                                                                                                <i className='material-icons'>edit</i>
                                                    </button>
                                                 </div>
                                                 <span className='hour'>
                                                 {
                                                     <span> { time } </span>
                                                }
                                                 </span>
                                              </div>
                                            </div>
                                        )
                                    })
                            }
                    </div>
                </div>
            </div>
        );
}
export default App;

