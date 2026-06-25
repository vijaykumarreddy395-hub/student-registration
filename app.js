const SUPABASE_URL = "https://awkysgjmfuxfdlinrfih.supabase.co";

const SUPABASE_KEY = "sb_publishable_k-ENShcukpf4hRRpzaWFhg_mctJzmPz";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function saveStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const course = document.getElementById("course").value;

    const { error } = await supabaseClient
        .from("students")
        .insert([{ name, email, mobile, course }]);

    if (error) {
        alert("Error Saving Data");
    } else {
        alert("Student Registered");
    }
}
