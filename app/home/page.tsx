import Footer from 'components/Footer'
import TopTitle from 'components/Toptext'
import Timer from 'components/Countdown'

export default function Page() {
    return (
        <div className="hero min-h-screen relative flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449156733864-dd5471bb7427)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <div className="hero-overlay bg-opacity-45"></div>
            <div className="hero-content flex flex-col">
                <main className="flex flex-col items-center">
                    <TopTitle />
                    <Timer />
                </main>
                <br />
                <Footer />
            </div>
        </div>
    )
}