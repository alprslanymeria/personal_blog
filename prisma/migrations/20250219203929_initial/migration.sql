BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[BlogPost] (
    [id] INT NOT NULL IDENTITY(1,1),
    [categoryId] INT NOT NULL,
    [imageUrl] NVARCHAR(1000) NOT NULL,
    [header] NVARCHAR(1000) NOT NULL,
    [summary] TEXT NOT NULL,
    [content] TEXT NOT NULL,
    [author] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [BlogPost_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [BlogPost_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Comment] (
    [commentId] INT NOT NULL IDENTITY(1,1),
    [blogPostId] INT NOT NULL,
    [cookieId] NVARCHAR(1000) NOT NULL,
    [content] NVARCHAR(1000) NOT NULL,
    [avatar] NVARCHAR(1000) NOT NULL,
    [isDeleted] BIT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Comment_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Comment_pkey] PRIMARY KEY CLUSTERED ([commentId])
);

-- CreateTable
CREATE TABLE [dbo].[Tag] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Tag_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Tag_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[BlogPostTag] (
    [blogPostId] INT NOT NULL,
    [tagId] INT NOT NULL,
    CONSTRAINT [BlogPostTag_pkey] PRIMARY KEY CLUSTERED ([blogPostId],[tagId])
);

-- CreateTable
CREATE TABLE [dbo].[CapsImage] (
    [id] INT NOT NULL IDENTITY(1,1),
    [imageUrl] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [CapsImage_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [CapsImage_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Project] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [summary] NVARCHAR(1000) NOT NULL,
    [content] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Project_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Project_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProjectImage] (
    [id] INT NOT NULL IDENTITY(1,1),
    [projectId] INT NOT NULL,
    [imageUrl] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [ProjectImage_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProjectLink] (
    [id] INT NOT NULL IDENTITY(1,1),
    [projectId] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [linkUrl] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [ProjectLink_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Technology] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [icon] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Technology_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProjectTechnology] (
    [projectId] INT NOT NULL,
    [technologyId] INT NOT NULL,
    CONSTRAINT [ProjectTechnology_pkey] PRIMARY KEY CLUSTERED ([projectId],[technologyId])
);

-- AddForeignKey
ALTER TABLE [dbo].[BlogPost] ADD CONSTRAINT [BlogPost_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Comment] ADD CONSTRAINT [Comment_blogPostId_fkey] FOREIGN KEY ([blogPostId]) REFERENCES [dbo].[BlogPost]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[BlogPostTag] ADD CONSTRAINT [BlogPostTag_blogPostId_fkey] FOREIGN KEY ([blogPostId]) REFERENCES [dbo].[BlogPost]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[BlogPostTag] ADD CONSTRAINT [BlogPostTag_tagId_fkey] FOREIGN KEY ([tagId]) REFERENCES [dbo].[Tag]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProjectImage] ADD CONSTRAINT [ProjectImage_projectId_fkey] FOREIGN KEY ([projectId]) REFERENCES [dbo].[Project]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProjectLink] ADD CONSTRAINT [ProjectLink_projectId_fkey] FOREIGN KEY ([projectId]) REFERENCES [dbo].[Project]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProjectTechnology] ADD CONSTRAINT [ProjectTechnology_projectId_fkey] FOREIGN KEY ([projectId]) REFERENCES [dbo].[Project]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProjectTechnology] ADD CONSTRAINT [ProjectTechnology_technologyId_fkey] FOREIGN KEY ([technologyId]) REFERENCES [dbo].[Technology]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
