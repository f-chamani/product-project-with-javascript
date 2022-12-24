import Store from './store/Store';
import Header from './header/Header';

function Obj() {
const obj=[{id:1,name:"گل لاله",price:"120,000T"},
          {id:2,name:"گل آفتاب گردان",price:"130,000T"},
          {id:3,name:"گل شقایق",price:"10,000T"},
          {id:4,name:"گل لاله واژگون",price:"780,000T"},
          {id:4,name:"گل لاله واژگون",price:"780,000T"},
          {id:4,name:"گل لاله واژگون",price:"780,000T"}
          ,{id:4,name:"گل لاله واژگون",price:"780,000T"}
          ,{id:4,name:"گل لاله واژگون",price:"780,000T"},
          {id:4,name:"گل لاله واژگون",price:"780,000T"},
          {id:4,name:"گل لاله واژگون",price:"780,000T"},

          {id:5,name:" گل ارکیده",price:"90,000T"}

]

  return (
    <div className="App">
      <Header/>
      <Store obj={obj}/>
    </div>
  );
}

export default Obj;
