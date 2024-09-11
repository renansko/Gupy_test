SELECT 
  us.id, 
  us.name AS razao, 
  tf.number 
FROM 
  User AS us
LEFT JOIN Telefones AS tf ON tf.userId = us.id
LEFT JOIN State AS st ON st.id = us.stateId
WHERE 
  st.name = 'SP'