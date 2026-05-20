export interface TaskReaderPort {
  exists(id: string): Promise<boolean>;
}
