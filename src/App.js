import './App.css';

function App() {
    let shoppingList = ['apples', 'Mac', 'dog', 'dill', 'tree seeds']

    fetch('http://localhost:8080/hobbies/all')
        .then(res => res.json())
        .then(data => shoppingList = data) // asynchronous code, will most likely run before the return, so the
    //                                      hobbies are not used in the list

    // let items = [
    //     <li>{shoppingList[0]}</li>,
    //     <li>{shoppingList[1]}</li>,
    //     <li>{shoppingList[2]}</li>,
    // ]

    // map transforma lista intr-o alta lista, element cu element
    //                           \/ cum foloseste elementul din prima lista,
    //                              pentru a creat un element in a doua lista
    //          ['apples',          'Mac',      'dog',          'dill',         'tree seeds']
    //              \/              \/
    //         [<li>apples</li>, <li>Mac</li>, <li>dog</li>, <li>dill</li>, <li>tree seeds</li>]
    let items = shoppingList.map(shoppingItem => <li>{shoppingItem}</li>)
    console.log(items)
    console.log([1,2,3].map(num => num+2)) // outputs [3,4,5]


    return (
        <main className="content">
            <h2>Shopping List:</h2>
            <ul>
                {
                    items
                }
            </ul>
        </main>
    );
}

export default App;
