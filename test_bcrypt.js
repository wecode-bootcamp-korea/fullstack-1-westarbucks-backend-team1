import bcrypt from 'bcrypt';

const makeHash = async (password) => {
  return await bcrypt.hash(password, 10);
};
const main = async() => {
  const hashedPassword = await makeHash('mySimplePassword');
  console.log('hashedPassword: ', hashedPassword);
};

main();
