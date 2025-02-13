function foo(x){
  if(x == 1) {
    return true;
  }
  else if (x == 2) {
    return false; 
  }
  else{
    return foo(x-1) || foo(x-2);
  }
}