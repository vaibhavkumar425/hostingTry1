export const metadata = {
    title:"About section",
    description:"This is about section of the website."
}
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <>
                {children}
                <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>Footer of About</footer>
            </>
    )
}
