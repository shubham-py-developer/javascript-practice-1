from http.server import BaseHTTPRequestHandler, HTTPServer
#
class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        print(self.command)
        print(self.path)
        if self.path=='/favicon.ico':
            self.send_response(204)
            self.end_headers()
            return
        if self.path=="/":
            self.send_response(200)
            self.send_header("Content-type","text/html")
            self.end_headers()
            self.wfile.write(b'<h1>Home Page</h1>')
        elif self.path == '/about':
            self.send_response(200)
            self.send_header("Content-type","text/html")
            self.end_headers()
            self.wfile.write(b"<h1>about us</h1>")
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'<h1>404 page not found!</h1>')

server = HTTPServer(('localhost',8000), MyHandler)#create server
print("server running on http://localhost:8000")
server.serve_forever()#start server

