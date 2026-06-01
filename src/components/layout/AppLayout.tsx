import { Outlet } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import { CustomCursor } from '../animations/CustomCursor';
import { LoadingScreen } from '../animations/LoadingScreen';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { WhatsAppFloat } from './WhatsAppFloat';
export function AppLayout(){useReveal();return <><LoadingScreen/><CustomCursor/><Navbar/><main><Outlet/></main><Footer/><WhatsAppFloat/></>}
