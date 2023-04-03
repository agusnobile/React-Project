import { Button, Card, DescriptionCard } from '@architecture-it/stylesystem'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useObtenerRepos from '../api/reposapi'
import { InterfaceUsers } from './InterfaceUsers'

export interface InterfaceRepos {
  id: number
  name: string
  owner: InterfaceUsers
  created_at: Date
  stargazers_count: number
  html_url: string
}

interface InterfaceTarjeta {
  username: string | undefined
}

function Tarjeta({ username }: InterfaceTarjeta) {
  const [repos, setRepos] = useState<InterfaceRepos[]>()
  useEffect(() => {
    const listaRepos = async () => {
      setRepos(await useObtenerRepos(username ? username : '/'))
    }
    listaRepos()
  }, [])

  function randomInt(index: number) {
    return index + 1 + Math.floor(Math.random() * 15) * Math.floor(Math.random() * 5)
  }
  const mapRepo = repos?.map((userRepo, index: number) => {
    return index < 10 ? (
      <div key={index}>
        <DescriptionCard
          imageProps={{
            src: `https://randomfox.ca/images/${randomInt(index)}.jpg`,
            height: 200,
            width: 200,
          }}
          onClick={() => {}}
          title={userRepo.name.slice(0, 17)}
          subtitle={userRepo.owner.login}
          url={userRepo.html_url}
          description={`Estrellas ${userRepo.stargazers_count}`}
        />
      </div>
    ) : null
  })
  console.log(repos)
  return (
    <div>
      <Link to={`/`}>
        <Button
          style={{ margin: '50px auto', width: '10%' }}
          type='submit'
          color='primary'
          onFocusVisible={() => {}}
          text='Volver'
          variant='contained'
        />
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', margin: '30px 30px' }}>
        {mapRepo}
      </div>
    </div>
  )
}

export default Tarjeta
