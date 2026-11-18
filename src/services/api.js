const API_BASE_URL = "http://localhost:8080/api";

export async function checkBackend() {
    
    const response = await fetch(`${API_BASE_URL}/health`);

    if(!response.ok){
        throw new Error("Backend connection failed");
    }

    return await response.json();

}