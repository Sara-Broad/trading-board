const getUsers = async (queryInterface, transaction) => {
  const userFullNamesFromUsers = await queryInterface.sequelize.query(
    'SELECT "fullName" FROM "Users"',
    { transaction }
  )  
  const userFullNames = userFullNamesFromUsers[0]
  const userNameList = userFullNames.map(userFullName => userFullName.fullName)
  console.log('userNameList', userNameList)
  return userNameList
}

const createPostsWithUsers = async (namesResults, queryInterface, transaction) => {
  return queryInterface.bulkInsert(
    'Posts',
     namesResults
  )
}
