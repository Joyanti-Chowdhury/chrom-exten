import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Position } from "../constant/position.const";
import InputCmp from "./common/Input";
import React, { FormEvent, useEffect, useState } from "react";
import FormExtract from "@/utils/FormExtract";
import { Skeleton } from "./ui/skeleton";

type sizeType = {
  popUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const Resizable = (props: sizeType) => {
  const [select, setSelect] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkCnd = Position.indexOf(select);
    const ptnLnth = Position.length - 1;
    if (checkCnd === ptnLnth) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [select]);

  const handleSelect = (event: string) => {
    setSelect(event);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    const dataInfo = FormExtract(event);
    console.log(dataInfo);
    
    setTimeout(() => {
      setLoading(false);
      alert("Task completed!");
    }, 4000); // 2 s
    // const data = await sendInfo(dataInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Collect Information</CardTitle>
          <CardDescription>
            Data is the new oil, but like oil, it's only valuable when refined.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <InputCmp
              id="name"
              name="name"
              placeholder="Name of the company"
              label="Name"
              isRequired
            />
            <InputCmp
              id="email"
              name="email"
              placeholder="Email of the company"
              label="Email"
              isRequired
            />
            <InputCmp
              id="hr"
              name="hr_name"
              placeholder="Name of HR"
              label="HR"
            />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="position">Position</Label>
              <Select required name="position" onValueChange={handleSelect}>
                <SelectTrigger id="position">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {Position.map((value) => {
                    return (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            {isOpen && (
              <InputCmp
                id="ctm_position"
                name="ctm_position"
                placeholder="Name of position"
                label="Custom Position"
                isRequired={isOpen}
              />
            )}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                className="max-h-[calc(100vh-700px)]"
                placeholder="Type your message here."
                name="description"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={() => props.popUp(false)}
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          {/* <Button type="submit">
           
            Submit</Button> */}

          <Button onClick={handleSubmit} type="submit" disabled={loading}>
            {loading ? (
              <Skeleton className="h-12 w-12 rounded-full bg-gray-600 mx-auto" />
            ) : (
              <Button>Submit</Button>
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default Resizable;
