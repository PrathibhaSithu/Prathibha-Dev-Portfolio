import { isHireable } from '../portfolio'


export default function Footer(){
    return (
        <footer className="mt-12 py-8 text-center text-slate-400">
            <div className="max-w-5xl mx-auto px-4">
                <div>{isHireable ? 'Open for opportunities' : 'Not hiring right now'}</div>
                <div className="mt-2">© {new Date().getFullYear()} Prathibha Sithumini</div>
            </div>
        </footer>
    )
}