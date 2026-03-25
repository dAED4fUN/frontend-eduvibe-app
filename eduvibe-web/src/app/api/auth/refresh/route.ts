import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const hasAuthPresent = cookieHeader.includes('auth-present=true');

  // MOCK: In a real app, verify the refresh_token.
  // Here we just check if the user logged in previously.
  if (!hasAuthPresent) {
    return NextResponse.json({ message: 'No auth present' }, { status: 401 });
  }

  const mockToken = "mock_access_token_123";
  const mockUser = {
    id: "mock_user_1",
    email: "test@eduvibe.com",
    role: "teacher",
    name: "Mock User"
  };

  const response = NextResponse.json({ accessToken: mockToken, user: mockUser }, { status: 200 });

  // Ensure the cookie is maintained across refreshes
  response.cookies.set('auth-present', 'true', { path: '/' });

  return response;
}
