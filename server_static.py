from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT= 8000
Handler = SimpleHTTPRequestHandler
server = HTTPServer(("localhost",PORT),Handler)
print(f"server is running at http://localhost:{PORT}")
server.serve_forever()
