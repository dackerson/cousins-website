class ProgramsController < ApplicationController
  before_action :authenticate, except: [:index, :create, :search, :submit]
  before_action :set_program, only: [:show, :edit, :update, :destroy, :toggle_published]

  # GET /programs
  # GET /programs.json
  def index
    @programs = Program.all
  end

  def search
    @answer_ids = []
    @question_ids = []
    if params.include? 'question'
      params['question'].each_pair do |q_id, a_ids|
        @question_ids << q_id.to_i
        @answer_ids += a_ids.reject &:empty?
      end
    end
    @answer_ids.map! &:to_i

    @programs = []
    Program.where(published: true).each do |program|
      search_matches = true
      Question.all.each do |question|
        if @question_ids.include? question.id and program.question_ids.include? question.id
          Answer.all.each do |answer|
            if @answer_ids.include? answer.id and not program.answer_ids.include? answer.id
              search_matches = false
            end
          end
        end
      end
      if search_matches
        @programs << program
      end
    end

    respond_to do |format|
      format.html { render 'results', status: :ok }
    end
  end

  def toggle_published
    @program.published = !@program.published
    respond_to do |format|
      if @program.save
        format.json { render json: { publish_button_text: view_context.publish_button_text(@program) }, status: :ok, layout: false }
      end
    end
  end

  def submit
    new
    render 'new'
  end

  # GET /programs/1
  # GET /programs/1.json
  def show
    render layout: 'admin'
  end

  # GET /programs/new
  def new
    @program = Program.new
  end

  # GET /programs/1/edit
  def edit
    render layout: 'admin'
  end

  # POST /programs
  # POST /programs.json
  def create
    @program = Program.new(program_params)

    answer_ids = []
    question_ids = []
    if params.include? 'question'
      params['question'].each_pair do |q_id, a_ids|
        question_ids << q_id.to_i
        answer_ids += a_ids.reject &:empty?
      end
      answer_ids.map! &:to_i
      question_ids.map! &:to_i
    end
    @program.questions = Question.find(question_ids)
    @program.answers = Answer.find(answer_ids)

    respond_to do |format|
      if @program.save
        format.html { redirect_to root_path, notice: 'Program was successfully created.' }
        format.json { render action: 'pages#home', status: :created, location: @program }
      else
        format.html { render action: 'new' }
        format.json { render json: @program.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /programs/1
  # PATCH/PUT /programs/1.json
  def update
    respond_to do |format|
      if @program.update(program_params)
        format.html { redirect_to @program, notice: 'Program was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @program.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /programs/1
  # DELETE /programs/1.json
  def destroy
    @program.destroy
    respond_to do |format|
      format.html { redirect_to programs_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_program
      @program = Program.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def program_params
      params.require(:program).permit(:name, :desc, :website)
    end
end
