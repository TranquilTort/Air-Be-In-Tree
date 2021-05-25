import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { addTreeHouse } from '../../store/TreeHouseReducer';
import './TreeHouseForm.css';



const TREES = [
    "Oak",
    "Pine",
    "Red Wood",
    "Fur",
    "Maple",
    "Chestnut",
    "Aspen"
  ];


const TreeHouseForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tree, setTree] = useState(TREES[0]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // console.log('handleSubmit clicked');
    e.preventDefault();

    const newTreeHouse = {
      id: nanoid(),
      title,
      imageUrl,
      body
    };
    dispatch(addTreeHouse(newTreeHouse));
    reset();
  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setBody('');
  };

  return (
    <div className='inputBox'>
      <h1>List TreeHouse</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />

        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />
        <label>
        Select a Tree
        <select
        onChange={(e)=>{
            setTree(e.target.value)
        }}
        value={tree}
        >
          {TREES.map((treev,i) => (
            <option
              key={i}
              value={treev}
            >
              {treev}
            </option>
          ))}
        </select>
      </label>
      <label></label>

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Enter your description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default TreeHouseForm;
