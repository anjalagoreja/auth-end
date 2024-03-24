USE [auth]
GO
/****** Object:  StoredProcedure [dbo].[sp_login_user]    Script Date: 11-02-2024 12:50:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/******************************
* Store Procedure : dbo.sp_register_user
* Author      : Anjala
* Date        :  28/1/24
* Description     : Script to register user
* Test Code      : EXEC dbo.sp_login_user 'anchal','anchal'
******************************/
ALTER PROCEDURE [dbo].[sp_login_user]
@user_name VARCHAR(200),
@password VARCHAR(MAX)

AS
BEGIN
    DECLARE @hashedpwd VARBINARY = HASHBYTES('SHA2_256',@password)
    DECLARE @count INT
	SELECT @count = COUNT(1)
	FROM dbo.users
	WHERE username=@user_name
	AND password=@hashedpwd

	IF @count=1
	BEGIN
    UPDATE dbo.users
    SET token=NEWID(),
    time_to_expire=DATEADD(mi,30,GETDATE())
    WHERE username=@user_name

	  SELECT username,fullname,userid,token,time_to_expire,1 as validYN
    FROM dbo.users
		WHERE username=@user_name
    END
	ELSE
	BEGIN
	     SELECT 0 as validYN
    END

END

select * from users;

SELECT DATEADD(mi,30,GETDATE())
