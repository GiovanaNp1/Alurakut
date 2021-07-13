import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/PorfileRelationsBoxWrapper';


function PorfileSidebar(githubUser) {
  return(
    <Box>
      <img src={`https://github.com/${githubUser.githubUser}.png`} style={{ borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'GiovanaNp1'
  const pessoasFavoritas = [
    'isabellalealx',
    'Kamilahsantos',
    'tabskey',
    'EricaSugui',
    'loiane'
  ]

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div style={{ gridArea: 'porfileArea' }}>
        <PorfileSidebar githubUser={githubUser}/>
      </div>
      <div style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1>
            Bem vindo(a)
          </h1>
          <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div style={{ gridArea: 'porfileReletionsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2>
          Pessoas da Comunidades ({pessoasFavoritas.length})
          </h2>
          <ul>
          {pessoasFavoritas.map((pessoa) => {
            return (
              <li>
               <a href={` /users/${pessoa}`} key={pessoa}>
                 <img src={`https://github.com/${pessoa}.png`}/>
                 <span>{pessoa}</span>
               </a>
              </li>
            )
            })
          }
          </ul>
        </ProfileRelationsBoxWrapper>
        <Box>Comunidades</Box>
      </div>
    </MainGrid>
    </>
  )
}
