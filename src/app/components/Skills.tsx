import * as React from 'react'

const Skills: React.FC = () => {

    const list = [];
    const skill = [
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"0001-01-01T00:00:00Z",
            detail:"SpringBootでAPIコンテナを実装したことがある。",
            duration:3,
            name:"Kotlin",
            self_evaluation:0,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-06-23T03:34:47.07Z",
            detail:"Java8で実装ができる",
            duration:18,
            name:"Java",
            self_evaluation:3,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-12-07T16:56:23.804817Z",
            detail:"SpringBootでAPIコンテナを実装したことがある。",
            duration:3,
            name:"Kotlin",
            self_evaluation:4,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-12-31T15:00:00Z",
            detail:"Seleniumでテストを書いたことがある",
            duration:3,
            name:"Python",
            self_evaluation:2,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-06-23T06:52:28.755Z",
            detail:"基本的な文法は理解して、実装することができる。",
            duration:3,
            name:"Ruby",
            self_evaluation:2,
            term:"serverside"
        },
        {
            category:{
                id:2,
                name:"フレームワーク"
            },
            created_at:"2019-06-23T06:56:22.93Z",
            detail:"基本的なCRUDの実装経験がある。",
            duration:6,
            name:"Spring",
            self_evaluation:2,
            term:"serverside"
        },
        {
            category:{
                id:2,
                name:"フレームワーク"
            },
            created_at:"2019-06-23T06:27:35.065Z",
            detail:"基本的なCRUDを作成することができる。",
            duration:3,
            name:"rubyonRails",
            self_evaluation:2,
            term:"serverside"
        }
    ];

    for (let idx in skill) {
        list.push(
            <li className="name">
                <div>{skill[idx].name}</div>
                <div>{skill[idx].duration}</div>
                <div>{skill[idx].category.name}</div>
                <div>{skill[idx].term}</div>
                <div>{skill[idx].self_evaluation}</div>
                <div>{skill[idx].detail}</div>
            </li>
        );
    }

    return (
        <div>
            <h1>this is Skills</h1>
            <div id="server_side">
                <ul className="container">
                    <li>{list}</li>
                </ul>
            </div>
        </div>
    );

}

export default Skills