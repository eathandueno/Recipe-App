import React from 'react'

const sample = () => {
  return (
    <div>
        <div className='Grains foods'>
                {ingredientData[0].map((ingredient, index) => (
                    <div className='icons'>
                    <img src={ingredient.src} alt={ingredient.name} />
                    <p>{ingredient.name}</p>
                    </div>
                ))}

            </div>
            <div className='Dairy foods'>
                <div className='icons'>
                    <button onClick={handleClick} >
                        <img className='icon' src={butter} alt='Butter Icon'/>
                        <p>butter</p>
                    </button>
                </div>
                <div className='icons'>
                    <img src={milk} alt='Milk' className='icon' />
                    <p>milk</p>
                </div>
                <div className='icons'>
                    <img src={cheese} alt='Cheese' className='icon' />
                    <p>cheese</p>
                </div>
                <div className='icons'>
                <img src={yogurt} alt='Yogurt' className='icon' />
                    <p>yogurt</p>
                </div>
            </div>
            <div className='Veggies foods'>
                <div className='icons'>
                <img src={lettuce} alt='Lettuce' className='icon' />
                    <p>lettuce</p>
                </div>
                <div className='icons'>
                <img className='icon' src={Broccoli} alt='broccoli'/>
                    <p>broccoli</p>  
                </div>
                <div className='icons'>
                    <img src={carrot} alt='carrot' className='icon' />
                    <p>carrot</p>
                </div>
                <div className='icons'>
                <img src={peppers} alt='Peppers' className='icon' />
                    <p>peppers</p>
                </div>
                <div className='icons'>
                <img src={avacado} alt='Avacado' className='icon' />
                    <p>avacado</p>
                </div>
            </div>
            <div className='Protein foods'>
                <div className='icons'>
                    <img src={chicken} alt='chicken' className='icon' />
                    <p>chicken</p>
                </div>
                <div className='icons'>
                    <img src={tofu} alt='Tofu' className='icon' />
                    <p>tofu</p>
                </div>
                <div className='icons'>
                    <img src={eggs} alt='Eggs' className='icon' />
                    <p>eggs</p>
                </div>
                <div className='icons'>
                <img src={beef} alt='Beef' className='icon' />
                    <p>beef</p>
                </div>
                <div className='icons'>
                <img src={beans} alt='Beans' className='icon' />
                    <p>beans</p>
                </div>
    </div>
  )
}

export default sample