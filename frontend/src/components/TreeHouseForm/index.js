import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { addTreeHouse,getTreeTypes } from '../../store/TreeHouseReducer';
import './TreeHouseForm.css';



const TreeHouseForm = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const dispatch = useDispatch();
    const treeTypesArr =  useSelector((state)=>Object.values(state.treehouse.types))
    const sessionUser = useSelector(state => state.session.user);
    const [treeType, setTreeType] = useState(null);
    const [treeImg, setTreeImg] = useState('http://permacultureapprentice.com/wp-content/uploads/2016/02/cover.jpg');
    useEffect(() => {
        dispatch(getTreeTypes());
    }, [dispatch]);

    console.log(treeTypesArr)
    useEffect(()=>{
        if(treeType!== null){
            setTreeImg(treeTypesArr.find(el=>el.id == treeType).image);
        }

    },[treeType])
    const handleSubmit = async (e) => {
    console.log('handleSubmit clicked');
    e.preventDefault();

    const newTreeHouse = {
      title,
      imageUrl,
      description,
      treeType,
      owner:sessionUser.id
    };
    console.log('NEW TREE HOUSE BUILT FRONTEND', newTreeHouse);
    let res = await dispatch(addTreeHouse(newTreeHouse));
    if(res){
      reset();
      history.push(`/treehouse/${res.id}`)
    }

  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setDescription('');
  };

  return (
    <div className='inputBox' style={{ backgroundImage: `url(${treeImg})` }}>
      <h1 className='form-title'>List Your TreeHouse!</h1>
      {/* {treeTypes.map((type)=> <div> {type} </div> )} */}
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-group'>

        <label className='form-label'>Name of the Property:</label>
        <input
            className='form-element'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Title'
            name='title'
        />
        </div>
        <div className='input-group'>
        <label className='form-label'>Picture of TreeHouse:</label>

          <input
          className='form-element'
            type='text'
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            placeholder='Image URL'
            name='imageUrl'
          />
          <img id="current-photo" src={imageUrl} onerror="this.src='https://www.unesale.com/ProductImages/Large/notfound.png'" alt=""></img>
        </div>

        <div className='input-group'>

          <label className='form-label'>
          Select a Tree: &nbsp;
          <select
          className='form-element'
          onChange={(e)=>{
              setTreeType(e.target.value)
          }}
          value={treeType}
          >
            <option hidden disabled selected value> Choose from our list</option>
            {treeTypesArr.map((treev,i) => (
              <option

                  key={i}
                  value={treev.id}
                  >
                {treev.name}
              </option>
            ))}
          </select>
        </label>
        </div>
      <div id='description-group'>

      <label className='form-label'>Enter The Description  Of Your Listing</label>
        <textarea
          id='description'
          className='form-element'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name='body'
          placeholder='Enter your description'
        ></textarea>
      </div>
        <button id='submit-form' type='submit'>Post Your TreeHouse!</button>
      </form>
    </div>
  );
};
export default TreeHouseForm;
