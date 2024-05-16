import Svg, { Path } from 'react-native-svg';
import {grayFont} from "@/assets/fonts/Fonts";

export const ArrowLeftIcon = () => {
    // @ts-ignore
    return <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={24} height={24} fill='none' stroke={grayFont} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' className='w-6 h-6'>
        <Path d='M15.75 19.5 8.25 12l7.5-7.5'/>
    </Svg>
}

export const AcceptIcon = () => {
    // @ts-ignore
    return <Svg width='15' height='11' viewBox='0 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg' stroke={grayFont}>
        <Path d='M1 4L6 9L14 1' stroke='#020617' stroke-width='2' stroke-linecap='round'/>
    </Svg>
}

export const CrossIcon = () => {
    // @ts-ignore
    return <Svg width='24' height='24' viewBox='0 0 24 24' fill="none" xmlns='http://www.w3.org/2000/svg' stroke={grayFont}>
        <Path fill-rule='evenodd' clip-rule='evenodd'
              d='M15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071Z'
              fill='#020617'/>
    </Svg>
}


