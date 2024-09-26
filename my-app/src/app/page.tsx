import './page.css'

export default function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <iframe 
            src="https://publuu.com/flip-book/667985/1487988"
            width="100%" 
            height="800" 
            allowFullScreen 
            allow="clipboard-write" 
            className="publuuflip"
          ></iframe>
      </div>
    </div>
  );
}
