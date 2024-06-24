// This is a dumb component, only outputs content
export default function Footer({ text }: { text: string }) {
    return (
        <footer className="footer mt-4 p-3 text-center" style={{backgroundColor: "#4a773c", color: "#fff"}}>
            {text}
        </footer>
    );
}
  