class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users     
  end

  # GET /users/1
  # GET /users/1.json
  # def show
  #   @user = User.find(params[:id])

  #   respond_to do |format|
  #     format.html # show.html.erb
  #     format.json { render json: @user }
  #   end
  # end

  # GET /users/new
  # GET /users/new.json
  # def new
  #   @user = User.new

  #   respond_to do |format|
  #     format.html # new.html.erb
  #     format.json { render json: @user }
  #   end
  # end

  # # GET /users/1/edit
  def edit
    @user = User.find(params[:id])
    puts @user
    render json: @user
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(params[:user])
    

    if @user.save
      @users = User.all
      # puts @users
          render json: @users 
      else
          render json: @user.errors, status: :unprocessable_entity 
      end
  end

  # PUT /users/1
  # # PUT /users/1.json
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      @users = User.all
      render json: @users    
    else
      render json: {message: "fail"}
    end
   
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    @users = User.all

    render json: @users 
  
  end
end
