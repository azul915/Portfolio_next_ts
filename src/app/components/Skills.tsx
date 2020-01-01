import * as React from 'react'

const Skills: React.FC = () => {

    const list = [];
    const skill = [
        {
            name: 'Java',
            duration: 25,
            category: { 
                id: 0, name: '言語' 
            },
            term: 'serverside',
            self_evaluation : 4,
            detail: '業務レベルで複雑な実装ができる',
            created_at: new Date('2020-01-01 00:00:00')
        },

        {
            name: 'Python',
            duration: 12,
            category: {
                id: 0, name: '言語'
            },
            term: 'serverside',
            self_evaluation : 2,
            detail: '自動テスト用のSeleniumを書いたことがある',
            created_at: new Date('2020-01-01 17:00:00')
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