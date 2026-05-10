"""
Eco-Heroes — Simple Python web server
======================================
Run this file to serve the Eco-Heroes page locally or on any server.

Usage:
    python server.py

Then open your browser at:  http://localhost:8000

Requirements: Python 3.6+  (no extra packages needed)

To run on a different port:
    python server.py --port 5000
"""

import http.server
import socketserver
import os
import argparse

def run(port: int = 8000) -> None:
    # Serve files from the same directory as this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    handler = http.server.SimpleHTTPRequestHandler

    # Suppress the default request logging noise (comment out to see logs)
    handler.log_message = lambda *args: None

    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"")
        print(f"  🌿 Eco-Heroes server running!")
        print(f"  ➜  Open:  http://localhost:{port}")
        print(f"  ➜  Press Ctrl+C to stop")
        print(f"")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Server stopped.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Eco-Heroes local server")
    parser.add_argument("--port", type=int, default=8000, help="Port to listen on (default: 8000)")
    args = parser.parse_args()
    run(args.port)
