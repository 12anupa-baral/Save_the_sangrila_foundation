export function getAdminPassword(): string | null {
  if (typeof window === "undefined") return null
  return sessionStorage.getItem("adminPassword")
}

export function isAdminAuthenticated(): boolean {
  return !!getAdminPassword()
}

export function logout() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("adminPassword")
  }
}
