// ===== STORAGE =====
const DB_KEY = 'atlas_users';
const SESSION_KEY = 'atlas_session';

function getUsers(){
  const raw = localStorage.getItem(DB_KEY);
  if(!raw) return {
    'student@demo.ro':{name:'Ion Popescu',year:'Anul II',pass:'student123',studied:[],notes:{},quizScores:[],streak:3,badges:[]},
    'profesor@demo.ro':{name:'Dr. Maria Ionescu',year:'Rezidențiat',pass:'prof123',studied:[],notes:{},quizScores:[],streak:12,badges:['pioneer','scholar']}
  };
  return JSON.parse(raw);
}
function saveUsers(u){localStorage.setItem(DB_KEY,JSON.stringify(u))}
function getSession(){return localStorage.getItem(SESSION_KEY)}
function setSession(email){localStorage.setItem(SESSION_KEY,email)}
function clearSession(){localStorage.removeItem(SESSION_KEY)}