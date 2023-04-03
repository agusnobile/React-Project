import { Footer, Header } from '@architecture-it/stylesystem'
import Busqueda from './home/index'

function Home() {
  return (
    <>
      <Header onClickButton={() => {}}>{}</Header>
      <Busqueda />
      <Footer
        institutional
        links={[
          {
            text: 'info@norlog.com.ar',
          },
          {
            text: 'Av. Presidente Perón N°4749, Benavídez, Bs As.',
          },
        ]}
        logoImgProps={{
          alt: 'Norlog logo',
          src: 'https://img2.storyblok.com/200x0/filters:quality(20):format(webp)/f/63950/1365x469/bd003c53e1/logo.png',
          width: '155px',
        }}
        name='Norlog'
      />
    </>
  )
}

export default Home
