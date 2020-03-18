import React, {Component} from 'react';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state={
            title:"",
            body:"",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        console.log(e);
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(e);

        const post= {
            title:this.state.title,
            body:this.state.body
        };

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(post)
        }).then(res=>res.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title</label>
                        <div>
                        <input type="text" value={this.state.title} name={"title"} onChange={this.onChange} />
                        </div>
                    </div>
                    <div>

                        <label>body</label>
                        <div>
                        <textarea name="body" value={this.state.body} id="" cols="30" rows="10" onChange={this.onChange}></textarea>
                        </div>
                    </div>

                    <div> <button type="submit">提交</button></div>
                </form>
            </div>
        );
    }
}

export default Feedback;
