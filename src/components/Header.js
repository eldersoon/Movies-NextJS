import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
import style from '../styles/Header.module.css'
import HeaderItem from './HeaderItem'

function Header() {
  return (
    <div>
      <header className='flex flex-col mt-5 sm:flex-row sm:justify-between items-center'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItem title='HOME' Icon={HomeIcon} />
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
          <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
          <HeaderItem title='SEARCH' Icon={SearchIcon} />
          <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <div className={`${style.logo}`}>Movies</div>
      </header>
    </div>
  )
}

export default Header
