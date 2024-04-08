import SideBarComponent from "@/Components/sidebar/SidebarComponent";
import "@/app/globals.css";
export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				<aside className="fixed h-screen">
					<SideBarComponent />
				</aside>
				<main className="">{children}</main>
			</body>
		</html>
	);
}
