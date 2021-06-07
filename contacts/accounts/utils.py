import jwt
from rest_framework import authentication

class JWTAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        data = authentication.get_authorization_header(request)
        return super().authenticate(request)