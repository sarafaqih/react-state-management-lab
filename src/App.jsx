import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  let totalStrength =0
  let totalAgility = 0
  const [team, setTeam]=useState([])
  const [money, setMoney]=useState(100)
  const [zombieFighters, setZombieFighters]=useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )

  let updatedTeam=[]
  let updatedZombieFighter=[]
  function handleAddFighter(fighter){

    if(money >= (fighter.price)){
    updatedTeam = [...team, fighter]
    console.log(updatedTeam)
     setTeam(updatedTeam)

     console.log('team', updatedTeam)

     updatedZombieFighter=[]
     zombieFighters.forEach((zombie) => {

      if (zombie.id !== fighter.id){
        updatedZombieFighter.push(zombie)
      }
     })
    //  const updatedZombieFighter = zombieFighters.filter((zombie) => { zombie.id !== fighter.id} )
     console.log('updated zombies', updatedZombieFighter)
     setZombieFighters(updatedZombieFighter)

     console.log('ZOMBIES', updatedZombieFighter)


    setMoney(money-(fighter.price))
  }
  else{
    console.log("not enough money")
  }


  }

  console.log('UPDATED TEAM  ',team)

  function handleRemoveFighter(fighter){

    console.log(fighter)

    // updatedTeam = [...team]
    // console.log('updated team blaa ', updatedTeam)

    // updatedTeam.forEach((member)=>{
    //   if(member.id === fighter.id){
    //     updatedTeam.pop(member)
    //     console.log(updatedTeam)
    //   }
    //   setTeam(updatedTeam)
    // })

     updatedTeam = team.filter(member => member.id !== fighter.id)
    setTeam(updatedTeam)

    updatedZombieFighter = [...zombieFighters, fighter]
    setZombieFighters(updatedZombieFighter)
    console.log('zombieeeees',zombieFighters)


      setMoney(money+(fighter.price))
  
  }

  return (

    <>
    {team.length === 0 ?
      (<h1>Pick some team members!</h1>) :
      (<>
      <h1>My Team</h1>
      {team.forEach((member)=> {
        totalStrength = totalStrength + member.strength
        totalAgility = totalAgility + member.agility
        })}
      <h1>Total Strength: {totalStrength}</h1>
      <h1>Total Agility: {totalAgility}</h1>
      {team.map((member) => (
        <div key={member.id}>
          <ul>
          <li><img src={member.img} alt="zombieImage" /></li>
          <li><strong>Name: </strong>{member.name}</li>
          <li><strong>Price: </strong>{member.price}</li>
          <li><strong>Strength: </strong>{member.strength}</li>
          <li><strong>Agility: </strong>{member.agility}</li>
          <button onClick={() => handleRemoveFighter(member)}>Remove</button>
          </ul>
        </div>
        
        

      ))}
      </>
      )
    }


    <h1>Money: {money}</h1>
    {zombieFighters.map((oneZombie) =>
    <div key={oneZombie.id}>
   
      <ul >
        <li><img src={oneZombie.img} alt="zombieImage" /></li>
        <li><strong>Name: </strong>{oneZombie.name}</li>
        <li><strong>Price: </strong>{oneZombie.price}</li>
        <li><strong>Strength: </strong>{oneZombie.strength}</li>
        <li><strong>Agility: </strong>{oneZombie.agility}</li>
        <button onClick={() => handleAddFighter(oneZombie)}>Add</button>
        </ul>

        <>
        
        </>


        </div>
    )}
    </>
  );
}

export default App